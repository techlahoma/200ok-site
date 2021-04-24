SHELL = /bin/bash

ROBOTS = public/robots.txt

default: build

dev:
	npm run netlify:dev

build:
	npm run build

# https://docs.netlify.com/configure-builds/environment-variables/#read-only-variables
# CONTEXT: production | deploy-preview | branch-deploy
deploy: build
	[ ! -f "$(ROBOTS).$(CONTEXT)" ] || cp "$(ROBOTS).$(CONTEXT)" $(ROBOTS)
	rm -f $(ROBOTS).*

clean:
	rm -rf node_modules public
