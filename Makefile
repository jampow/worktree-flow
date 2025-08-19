.PHONY: server

		# -v $(CURRENT_DIR)/server/public:/var/www/files \

CURRENT_DIR := $(shell pwd)

server:
	docker run --network host \
		--rm \
		-v $(CURRENT_DIR)/server/nginx.conf:/etc/nginx/nginx.conf \
		-v $(CURRENT_DIR)/tasks/bugfix.260153.262524-delaunay-version-sync/delaunay-ui/packages/react/dist:/var/www/files/delaunay-ui-react \
		nginx:latest
