.PHONY : all

all : www

serve : www
	cd www && python3 -m http.server

www : pages/home/build
	- mkdir -p $@
	cp -r pages/home/build/* www/

pages/home/build :
	cd pages/home && yarn && yarn build

.PHONY : clean
clean :
	-rm -rf pages/home/build
