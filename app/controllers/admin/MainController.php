<?php
namespace app\controllers\admin;


class MainController extends AdminController {

    public function indexAction(){
        $countArticles = \R::count('article');
        $countJobs = \R::count('job');

        $this->setMeta('Админка');
        $this->setData(compact('countArticles', 'countJobs', 'countCourses', 'countOrders'));
    }
}