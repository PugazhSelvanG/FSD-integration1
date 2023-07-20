package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.RModel;
import com.example.demo.Repository.Repo;
     @Service
public class Rservice {
   @Autowired
   Repo repo;
   public void booking(RModel mod) {
	   repo.save(mod.getName(),mod.getEmail(),mod.getDate(),mod.getTime(),mod.getGuest());
   }
   public List<RModel> getdet()
   {
	   return repo.findAll();
   }
   public RModel updatedetails(RModel st2)
	{
		return repo.saveAndFlush(st2);
	}
	
	public void deleteDetails(String sid)
	{
		repo.delete(sid);

	}
  
}
