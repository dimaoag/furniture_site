<section class="content-header">
    <h1>Галерея к "<?=$job->name?>"</h1>
    <ol class="breadcrumb">
        <li><a href="<?=ADMIN?>"><i class="fa fa-dashboard"></i>Главная</a></li>
        <li><a href="<?=ADMIN?>/job"><i class="fa fa-dashboard"></i>Все работы</a></li>
        <li>Галерея</li>
    </ol>
</section>

<section class="content">
    <div class="row">
        <div class="col-md-12">
            <div class="box">
                <div class="box-body">
                    <div class="register-main">
                        <div class="col-md-12 account-left">
                            <form method="post" action="<?=ADMIN?>/gallery" data-toggle="validator" role="form">
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <div class="box box-primary box-solid file-upload">
                                            <div class="box-header">
                                                <h3 class="box-title">Галерея с изображениями работ</h3>
                                            </div>
                                            <div class="box-body">
                                                <div id="gallery" class="btn btn-success" data-url="/gallery/add-image" data-name="gallery" data-id="<?=$job->id;?>">
                                                    Выберите изображение
                                                </div>
                                                <p>
                                                    <small>
                                                        Recommended size:
                                                        <?=\furniture\App::$app->getProperty('gallery_with'); ?>
                                                        x
                                                        <?=\furniture\App::$app->getProperty('gallery_height'); ?>
                                                    </small>
                                                </p>
                                                <div class="gallery">
                                                    <?php if (!empty($gallery)):?>
                                                        <?php foreach ($gallery as $item): ?>
                                                            <img src="/images/<?=$item->img;?>" alt="image" class="img-gallery del-gallery"
                                                                 data-id="<?=$job->id;?>" data-src="<?=$item->img;?>" data-type="gallery"
                                                                 style="margin: 5px">
                                                        <?php  endforeach;?>
                                                    <?php endif;?>
                                                </div>
                                            </div>
                                            <div class="overlay">
                                                <i class="fa fa-refresh fa-spin"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                                <div class="form-group">
                                    <!--                                    <div class="box-footer">-->
                                    <!--                                    <button type="submit" class="btn btn-block btn-success">Сохранить</button>-->
                                    <!--                                    </div>-->
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
        </div>
    </div>
</section>