package com.example.demo.Repository;

import java.sql.Date;
import java.sql.Time;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.RModel;

import jakarta.transaction.Transactional;



@Repository
public interface Repo extends JpaRepository<RModel,Integer>{
         @Modifying
         @Query(value= "insert into r1(name,email,date,time,guest) values(?,?,?,?,?)",nativeQuery =true)
         @Transactional
         public void save(String name,String email,String date,String time,int guest);

          @Modifying
          @Query(value="delete from r1 where email=:name",nativeQuery=true)
          @Transactional
          public void delete(String name);
		
}
