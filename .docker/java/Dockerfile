FROM openjdk:11

RUN apt-get update && apt-get install -y \
    curl \
    unzip

RUN cd /tmp \
    && curl -O https://dlcdn.apache.org/maven/maven-3/3.8.2/binaries/apache-maven-3.8.2-bin.zip \
    && unzip -d /opt/maven apache-maven-3.8.2-bin.zip

ENV PATH="/opt/maven/apache-maven-3.8.2/bin:${PATH}"

ARG UID
ARG USERNAME

RUN useradd -m ${USERNAME} -s /bin/bash -u ${UID} -G sudo
USER ${USERNAME}