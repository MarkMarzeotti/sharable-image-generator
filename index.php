<?php
    $pageLink = 'https://sig.markmarzeotti.com/';
    // $pageLink = 'http://localhost:8888/personal/sharable-image-generator/';
    $screenname = htmlspecialchars($_GET["screenname"]); // between 3 and 16 chars
    if ($screenname) {
        $title = $screenname . ' Shared Their Image';
        $image = $pageLink . 'generated/' . $screenname . '.png';
        $link = $pageLink . '?screenname=' . $screenname;
    } else {
        $title = 'Share your image';
        $image = $pageLink . 'assets/img/generator-bg.png';
        $link = $pageLink;
    }
?>
<!doctype html>
<html prefix="og: http://ogp.me/ns#" class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title><?php echo $title; ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" initial-scale="1">

        <meta property="og:image" content="<?php echo $image; ?>" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:title" content="<?php echo $title; ?>" />
        <meta property="og:description" content="Share your image with this fun little tool!" />
        <meta property="og:url" content="<?php echo $link; ?>" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="<?php echo $title; ?>" />
        <meta property="og:type" content="article" />

        <meta itemprop="name" content="<?php echo $title; ?>">
        <meta itemprop="description" content="Share your image with this fun little tool!">
        <meta itemprop="image" content="<?php echo $image; ?>">

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@stephagency"/>
        <meta name="twitter:image" content="<?php echo $image; ?>"/>
        <meta name="twitter:title" content="<?php echo $title; ?>"/>
        <meta name="twitter:description" content="Share your image with this fun little tool!"/>

        <meta property="fb:app_id" content="966242223397117" />

        <meta name="Description" content="Share your image with this fun little tool!" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="canonical" href="<?php echo $pageLink; ?>"/>

        <link rel="stylesheet" href="assets/css/main.min.css">
    </head>
    <body>
        <!--[if lte IE 9]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
        <![endif]-->

        <section class="aol vertical-middle-wrapper">
            <div class="vertical-middle">
                <div class="row">
                    <div class="column text-center">
                        <h1>Sharable Image Generator</h1>
                        <canvas id="canvas" width="1200" height="630"></canvas>
                        <?php if ($screenname) { ?>
                        <div class="created-image">
                            <img src="<?php echo $image; ?>" alt="<?php echo $title; ?>">
                        </div>
                        <a href="<?php echo $pageLink; ?>">Create Yours!</a>
                        <?php } else { ?>
                        <div id="gen-bucket"></div>
                        <div class="create-image">
                            <img src="<?php echo $image; ?>" alt="<?php echo $title; ?>">
                            <form class="image-generator" id="bury" action="<?php echo $pageLink; ?>">
                                <input type="text" name="screenname" id="screenname" value="" maxlength="16">
                                <input type="submit" value="Create It">
                            </form>
                        </div>
                        <?php } ?>
                        <div class="share">

                            <!-- AddToAny BEGIN -->
                            <div class="a2a_kit a2a_kit_size_32 a2a_default_style" data-a2a-url="<?php echo $link; ?>">
                            <a class="a2a_button_facebook"></a>
                            <a class="a2a_button_twitter"></a>
                            <a class="a2a_button_google_plus"></a>
                            <a class="a2a_button_pinterest"></a>
                            <a class="a2a_button_linkedin"></a>
                            </div>
                            <script async src="https://static.addtoany.com/menu/page.js"></script>
                            <!-- AddToAny END -->
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <script src="assets/js/vendor/modernizr-3.5.0.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
        <script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-3.2.1.min.js"><\/script>')</script>
        <script src="assets/js/main.min.js"></script>
    </body>
</html>
