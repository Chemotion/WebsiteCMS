.PHONY: all
all: build push

.PHONY: build
build:
	docker build . -t chemotion-web-cms

.PHONY: push
push:
	docker image tag chemotion-web-cms imgreg.chemserv.scc.kit.edu/chemotion-web/cms:latest
	docker image push imgreg.chemserv.scc.kit.edu/chemotion-web/cms:latest

.PHONY: deploy
deploy: pull run

.PHONY: pull
pull:
	docker pull imgreg.chemserv.scc.kit.edu/chemotion-web/cms:latest

.PHONY: run
run: .env database
	docker compose up -d