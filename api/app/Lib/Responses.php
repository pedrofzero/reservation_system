<?php

namespace App\Lib;

class Responses
{
    const SUCCESS = ['Result' => 1, 'Message' => 'Success'];

    const ERROR = [
        'error_response' => ['Result' => 0, 'Code' => 'L0', 'Message' => 'Error Response.'],
        'invalid_data' => ['Result' => 0, 'Code' => 'L1', 'Message' => 'Invalid Data.'],
        'email_already_exists' => ['Result' => 0, 'Code' => 'L2', 'Message' => 'Email already exists.'],
        'admin_not_exists' => ['Result' => 0, 'Code' => 'L3', 'Message' => 'Admin not exists.'],
        'wrong_credentials' => ['Result' => 0, 'Code' => 'L4', 'Message' => 'Wrong credentials.'],
        'category_not_exists' => ['Result' => 0, 'Code' => 'L5', 'Message' => 'Category not exists.'],
        'tour_not_exists' => ['Result' => 0, 'Code' => 'L6', 'Message' => 'Tour not exists.'],
        'wrong_recover_code' => ['Result' => 0, 'Code' => 'L7', 'Message' => 'Wrong recover code.'],
        'recover_code_expired' => ['Result' => 0, 'Code' => 'L8', 'Message' => 'Recover code expired.'],
        'account_not_enabled' => ['Result' => 0, 'Code' => 'L9', 'Message' => 'Account not enabled.'],
        'account_already_active' => ['Result' => 0, 'Code' => 'L10', 'Message' => 'Account already active.'],
        'wrong_confirm_code' => ['Result' => 0, 'Code' => 'L11', 'Message' => 'Wrong confirm code.'],
        'confirm_code_expired' => ['Result' => 0, 'Code' => 'L12', 'Message' => 'Confirm code expired.'],
        'account_not_active' => ['Result' => 0, 'Code' => 'L13', 'Message' => 'Account not active.'],
        'image_not_exists' => ['Result' => 0, 'Code' => 'L14', 'Message' => 'Image not exists.'],
        'user_not_exists' => ['Result' => 0, 'Code' => 'L15', 'Message' => 'User not exists.'],
        'zone_not_exists' => ['Result' => 0, 'Code' => 'L16', 'Message' => 'Zone not exists.'],
        'subzone_not_exists' => ['Result' => 0, 'Code' => 'L17', 'Message' => 'Subzone not exists.'],
        'banner_not_exists' => ['Result' => 0, 'Code' => 'L18', 'Message' => 'Banner not exists.'],
        'invalid_image_size' => ['Result' => 0, 'Code' => 'L19', 'Message' => 'Invalid image size.'],
        'staff_not_exists' => ['Result' => 0, 'Code' => 'L20', 'Message' => 'Staff element not exists.'],
    ];
}