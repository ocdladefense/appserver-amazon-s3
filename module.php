<?php 





class S3Module extends Module {

    public function __construct() {
        parent::__construct();
    }




    public function doAction($param = null) {

        $tpl = new Template("s3");
        $tpl->addPath(__DIR__ . "/templates");

        return $tpl;
    }


    public function doQuery() {

        $api = loadapi();

        $results = $api->query("SELECT Name, Id, Start_Date__c, Banner_Location_Text__c FROM Event__c ORDER BY Start_Date__c DESC");

        $records = $results->getRecords();

        return $records;
    }

}