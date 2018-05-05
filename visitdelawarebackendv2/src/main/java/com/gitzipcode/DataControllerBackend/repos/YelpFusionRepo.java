package com.gitzipcode.DataControllerBackend.repos;

import com.gitzipcode.DataControllerBackend.DAOs.YelpFusion.Business;
import org.springframework.data.repository.CrudRepository;


public interface YelpFusionRepo extends CrudRepository <Business, Integer>{
}
