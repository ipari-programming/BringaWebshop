package repositories;

import entity.BicycleEntity;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public interface IBicycleRepository {
    BicycleEntity BicycleCreate(BicycleEntity bicycleEntity) throws Exception;
    BicycleEntity update(BicycleEntity bicycleEntity) throws Exception;
    boolean delete(int id) throws Exception;
    List<BicycleEntity> getAll() throws Exception;
    BicycleEntity getById(int id) throws Exception;
    BicycleEntity getByItemNumber(String cikkszam) throws Exception;
}
