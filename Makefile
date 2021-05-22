ALL = www postprocess

.PHONY : all
all : $(ALL)

serve : www
	cd www && python3 -m http.server

.PHONY : postprocess
postprocess : www
	yarn react-snap
	- rm $^/200.html
	find www -path '*.htm' -o -path '*.html' -exec node scripts/postprocess.js {} +

www : node_modules pages/home/build pages/addons/ctf
	mkdir -p $@/addons
	cp -r pages/home/build/* www/
	cp -r pages/addons/ctf/packages/landing/build $@/addons/ctf

pages/home/build :
	cd pages/home && yarn --frozen-lockfile && yarn build

pages/addons/ctf :
	mkdir -p $@
	curl -H "Authorization: token $$GITHUB_TOKEN" -L https://api.github.com/repos/nilfalse/ctf/tarball | tar --strip-components 1 -xz -C $@
	cd $@/packages/landing && yarn --frozen-lockfile
	cd $@/packages/landing && SKIP_PREFLIGHT_CHECK=true PUBLIC_URL=/addons/ctf yarn react-scripts build

node_modules :
	yarn --frozen-lockfile

.PHONY : clean distclean
clean :
	-rm -rf www pages/home/build
distclean : clean
	-rm -rf node_modules pages/home/node_modules pages/addons
