package com.gitzipcode.DataControllerBackend.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class StartController {

    @RequestMapping("/")
    @ResponseBody
    @CrossOrigin
    String home() {
        return "Welcome to the backend!";
    }
}
