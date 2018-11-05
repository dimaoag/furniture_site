

<div class="container">
    <div class="row">
        <div class="col-12">
<!--            <a href="--><?php //=PATH ?><!--" class="py-3 d-flex align-items-center article-back">-->
<!--                <i class="fa fa-arrow-left mr-1"></i>-->
<!--                <h3 class="">назад</h3>-->
<!--            </a>-->
            <a class='animated-arrow my-4 text-dark' href="<?=PATH?>">
                <span class='the-arrow -left'>
                  <span class='shaft'></span>
                </span>
                <span class='main'>
                    <span class='text'>
                        назад
                    </span>
                    <span class='the-arrow -right'>
                        <span class='shaft'></span>
                    </span>
                </span>
            </a>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <!-- Section: Blog v.4 -->
            <section class="article-view">

                <!-- Grid row -->
                <div class="row">

                    <!-- Grid column -->
                    <div class="col-md-12">

                        <!-- Card -->
                        <div class="card card-cascade wider reverse">

                            <!-- Card image -->
                            <div class="view view-cascade overlay">
                                <img class="card-img-top" src="<?=PATH?>/images/<?=$article->img?>" alt="Sample image">
                            </div>

                            <!-- Card content -->
                            <div class="card-body card-body-cascade text-center">

                                <!-- Title -->
                                <h2 class="font-weight-bold mt-2"><?=h($article->title);?></h2>
                                <!-- Data -->
                                <p class="py-2"><?=echoDate($article->created_at);?></p>

                            </div>
                            <!-- Card content -->

                        </div>
                        <!-- Card -->

                        <!-- Excerpt -->
                        <div class="mt-4 article-description">
                            <?=$article->description;?>
                        </div>

                    </div>
                    <!-- Grid column -->

                </div>
                <!-- Grid row -->

            </section>
            <!-- Section: Blog v.4 -->
        </div>
    </div>
</div>
