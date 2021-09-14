FROM node:14.16

ARG UID
ARG USERNAME

RUN userdel -f node
RUN useradd -m ${USERNAME} -s /bin/bash -u 1001 -G sudo
USER ${USERNAME}