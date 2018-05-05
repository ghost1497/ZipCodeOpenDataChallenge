package com.gitzipcode.DataControllerBackend.repos;

import com.gitzipcode.DataControllerBackend.DAOs.NationalParkApi.NationalParkDAO;
import com.gitzipcode.DataControllerBackend.DAOs.NationalParkApi.NationalParksApiResponse;
import org.springframework.data.repository.CrudRepository;

public interface NParksRepo extends CrudRepository<NationalParkDAO, Long>{
}
