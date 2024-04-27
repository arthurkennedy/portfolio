<?php

    function cleanUpData($data){
        
        $retval = trim($data);
        $retval = stripslashes($retval);
        $retval = htmlspecialchars($retval);

        return($retval);
    }
?>
