service mysql start;
mysql < /app/init.sql;
node /app/index.js;
/bin/bash;