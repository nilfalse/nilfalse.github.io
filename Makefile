.PHONY : build
build :
	yarn build
	cd out && python3 -m http.server

.PHONY : clean distclean
clean :
	- rm -rf out .next
distclean : clean
	- rm -rf node_modules
