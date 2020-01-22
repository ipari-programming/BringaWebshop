package services;

import common.ServiceObjectResponse;
import entity.ShifterEntity;

import java.util.List;

public interface IShifterService {
    ServiceObjectResponse<List<ShifterEntity>> getAll();
    ServiceObjectResponse<ShifterEntity> getById(int id);

}
