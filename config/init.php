<?php

define("DEBUG", 0);
define("ROOT", dirname(__DIR__));
define("WWW", ROOT . "/public");
define("APP", ROOT . "/app");
define("CORE", ROOT . "/vendor/furniture/core");
define("LIBS", ROOT . "/vendor/furniture/core/libs");
define("CACHE", ROOT . "/tmp/cache");
define("CONFIG", ROOT . "/config");
define("LAYOUT", "furniture");

//http://shop2.com
$app_path = "https://{$_SERVER['HTTP_HOST']}";
define("PATH", $app_path);
define("ADMIN", $app_path . "/admin");

require ROOT . "/vendor/autoload.php";
