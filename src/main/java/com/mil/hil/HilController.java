package com.mil.hil;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/hil")
public class HilController {
	@RequestMapping(value="/cil")
	public ModelAndView create() {
	    return new ModelAndView("cil");
	}
	
	@RequestMapping(value="/modal/contents",method = RequestMethod.GET)
	public String modalPopup() {
		System.out.println("in");
		return "/modal/contents";
	}
}
