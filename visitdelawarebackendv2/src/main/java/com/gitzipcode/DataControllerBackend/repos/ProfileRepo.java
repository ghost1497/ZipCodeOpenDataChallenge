package com.gitzipcode.DataControllerBackend.repos;

import com.gitzipcode.DataControllerBackend.DAOs.Profile;
import org.springframework.data.repository.CrudRepository;

public interface ProfileRepo extends CrudRepository<Profile, Integer> {
}
