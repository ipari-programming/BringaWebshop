package services;

import common.ServiceObjectResponse;
import entity.BicycleEntity;

import java.util.List;

public interface IBicycleService {
    ServiceObjectResponse<List<BicycleEntity>> getAll();
    ServiceObjectResponse<BicycleEntity> getByItemNumber(String cikkszam);
    ServiceObjectResponse<BicycleEntity> getById(int id);
    ServiceObjectResponse<BicycleEntity> create(BicycleEntity bicycleEntity);
    ServiceObjectResponse<BicycleEntity> update(BicycleEntity bicycleEntity);
    ServiceObjectResponse delete(int id);
}
