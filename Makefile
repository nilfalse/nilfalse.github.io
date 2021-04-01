.PHONY : all

all : www

serve : www
	cd www && python3 -m http.server

www : node_modules pages/home/build pages/addons/ctf
	- mkdir -p $@
	cp -r pages/home/build/* www/
	- mkdir -p $@/addons
	cp -r pages/addons/ctf/packages/landing/build $@/addons/ctf
	yarn react-snap

pages/home/build :
	cd pages/home && yarn --frozen-lockfile && yarn build

pages/addons/ctf :
	mkdir -p $@
	curl -H "Authorization: token $$GITHUB_TOKEN" -L https://api.github.com/repos/nilfalse/ctf/tarball | tar --strip-components 1 -xzv -C $@
	cd $@/packages/landing && yarn --frozen-lockfile
	cd $@/packages/landing && SKIP_PREFLIGHT_CHECK=true PUBLIC_URL=/addons/ctf yarn react-scripts build

node_modules :
	yarn --frozen-lockfile

.PHONY : clean
clean :
	-rm -rf node_modules www pages/home/build pages/home/node_modules pages/addons/ctf
