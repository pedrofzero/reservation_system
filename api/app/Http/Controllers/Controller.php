<?php

namespace App\Http\Controllers;

abstract class Controller
{
    protected function response(array $response, $data = null, array $error = null)
    {
        if ($data === null && $error === null) {
            return $response;
        }

        if ($data !== null) {
            return array_merge($response, ['Data' => $data]);
        } else {
            return array_merge($response, ['Error' => $error]);
        }
    }
}
