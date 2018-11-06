<!DOCTYPE html>
<html lang="en">
<head>
    <base href="/">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="images/favicon.png" type="image/png" />
<!--    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">-->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/mdb.min.css">
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.css">
    <link rel="stylesheet" href="css/magnific-popup.css">
    <link rel="stylesheet" href="css/slick.css">
    <link rel="stylesheet" href="css/slick-theme.css">
    <link rel="stylesheet" href="css/nanogallery2.min.css">
    <link rel="stylesheet" href="css/nanogallery2.woff.min.css">
    <link rel="stylesheet" href="css/style.css">
    <?= $this->getMeta(); ?>


    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-128667598-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-128667598-1');
    </script>


    <!-- Yandex.Metrika counter -->
    <script type="text/javascript" >
        (function (d, w, c) {
            (w[c] = w[c] || []).push(function() {
                try {
                    w.yaCounter51010976 = new Ya.Metrika2({
                        id:51010976,
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true
                    });
                } catch(e) { }
            });

            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function () { n.parentNode.insertBefore(s, n); };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://mc.yandex.ru/metrika/tag.js";

            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else { f(); }
        })(document, window, "yandex_metrika_callbacks2");
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/51010976" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->


</head>
<body>

<script src="js/jquery-3.3.1.js"></script>
<script src="js/owl.carousel.min.js"></script>

<?= $content; ?>

<script>
    var path = '<?=PATH;?>';
</script>


<script src="js/bootstrap.min.js"></script>
<script src="js/mdb.min.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/wow.min.js"></script>
<script src="js/jquery.fittext.js"></script>
<script src="js/parallax.min.js"></script>
<script src="js/jquery.magnific-popup.min.js"></script>
<script src="js/jquery.waterwheelCarousel.js"></script>
<script src="js/slick.min.js"></script>
<script src="js/jquery.equalheights.min.js"></script>
<script src="js/jquery.nanogallery2.js"></script>
<script src="js/script.js"></script>
</body>
</html>