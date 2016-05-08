FROM debian:testing
RUN apt-get update && apt-get -y install git python-pip python-dev
RUN cd ; git clone https://github.com/komitywa/wysadzulice.pl.git
# TODO: factor out code from .travis.yml and here to a separate script.
RUN cd ~/wysadzulice.pl && pip install -r requirements.txt
RUN cd ~/wysadzulice.pl && pep8 --exclude='wysadzulice/migrations/*' .
RUN cd ~/wysadzulice.pl && cp wysadzulice_pl/secrets.py.example wysadzulice_pl/secrets.py
RUN cd ~/wysadzulice.pl && coverage run --source=wysadzulice manage.py test
