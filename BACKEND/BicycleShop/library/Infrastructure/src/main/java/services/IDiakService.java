package services;

import common.ServiceObjectResponse;
import entity.DiakEntity;

import java.util.List;

public interface IDiakService
{
    ServiceObjectResponse<List<DiakEntity>> getAll();
    ServiceObjectResponse<DiakEntity> getByName(String name);
    ServiceObjectResponse<DiakEntity> getById(int id);
    ServiceObjectResponse<DiakEntity> create(DiakEntity diak);
    ServiceObjectResponse<DiakEntity> update(DiakEntity diak);
    ServiceObjectResponse delete(int id);
}
