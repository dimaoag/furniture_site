<?php
namespace app\controllers\admin;

use app\models\admin\Job;

class JobController extends AdminController {

    public function indexAction(){

        $jobs = \R::findAll('job');

        $this->setMeta('Все выполненые работы');
        $this->setData(compact('jobs'));
    }


    public function addAction(){
        if (!empty($_POST)){
            $job = new Job();
            $data = $_POST;
            $data['status'] = '1';
            $job->load($data);
            if (!$job->validate($data)){
                $job->getErrors();
                redirect();
            }
            if ($id = $job->save('job')){
                $_SESSION['success'] =  'Работа добавлена!';
            }
            redirect();
        }
        $this->setMeta('Добавить новою работу');
    }



    public function editAction(){
        if (!empty($_POST)){
            $id = $this->getRequestId(false);
            $job = new Job();
            $data = $_POST;
            $job->load($data);
            if (!$job->validate($data)){
                $job->getErrors();
                redirect();
            }
            if ($job->update('job', $id)){
                $_SESSION['success'] =  'Данные изменены!';
            }
            redirect();
        }
        $id = $this->getRequestId();
        $job = \R::findOne('job','id = ?', [$id]);

        $this->setMeta("Изменить {$job->name}");
        $this->setData(compact( 'job'));
    }


    public function deleteAction(){
        $id = $this->getRequestId();
        $job = \R::findOne('job', "id = ?", [$id]);
        \R::exec("DELETE FROM job WHERE id = ?", [$id]);
        $_SESSION['success'] =  'Работа удалена!';
        redirect();
    }



}