package service;

import common.ServiceObjectResponse;
import entity.BicycleEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.IBicycleRepository;
import services.IBicycleService;

import java.util.List;

@Service
public class BicycleService implements IBicycleService {

    @Autowired
    IBicycleRepository _bicycleRepository;

    public ServiceObjectResponse<List<BicycleEntity>> getAll()
    {
        ServiceObjectResponse<List<BicycleEntity>> response = new ServiceObjectResponse<>();

        try
        {
            List<BicycleEntity> bicycleEntities = _bicycleRepository.getAll();

            response.setObject(bicycleEntities);
            response.setIsSuccess(true);
            response.setMessage("No errors.");
        }
        catch (Exception ex)
        {
            response.setIsSuccess(false);
            response.setMessage(ex.getMessage());
        }

        return response;
    }

    public ServiceObjectResponse<BicycleEntity> getByItemNumber(String cikkszam)
    {
        ServiceObjectResponse<BicycleEntity> response = new ServiceObjectResponse<>();

        try
        {
            BicycleEntity bicycleEntity = _bicycleRepository.getByItemNumber(cikkszam);

            response.setObject(bicycleEntity);
            response.setIsSuccess(true);
            response.setMessage("No errors.");
        }
        catch (Exception ex)
        {
            response.setIsSuccess(false);
            response.setMessage(ex.getMessage());
        }

        return response;
    }

    public ServiceObjectResponse<BicycleEntity> getById(int id)
    {
        ServiceObjectResponse<BicycleEntity> response = new ServiceObjectResponse<>();

        try
        {
            BicycleEntity bicycleEntity = _bicycleRepository.getById(id);

            response.setObject(bicycleEntity);
            response.setIsSuccess(true);
            response.setMessage("No errors.");
        }
        catch (Exception ex)
        {
            response.setIsSuccess(false);
            response.setMessage(ex.getMessage());
        }

        return response;
    }

    public ServiceObjectResponse<BicycleEntity> create(BicycleEntity bicycleEntity)
    {
        ServiceObjectResponse<BicycleEntity> response = new ServiceObjectResponse<>();

        try
        {
            BicycleEntity data = _bicycleRepository.BicycleCreate(bicycleEntity);

            response.setObject(data);
            response.setIsSuccess(true);
            response.setMessage("No errors.");
        }
        catch (Exception ex)
        {
            response.setIsSuccess(false);
            response.setMessage(ex.getMessage());
        }

        return response;
    }

    public ServiceObjectResponse<BicycleEntity> update(BicycleEntity bicycleEntity)
    {
        ServiceObjectResponse<BicycleEntity> response = new ServiceObjectResponse<>();

        try
        {
            BicycleEntity data = _bicycleRepository.update(bicycleEntity);

            response.setObject(data);
            response.setIsSuccess(true);
            response.setMessage("No errors.");
        }
        catch (Exception ex)
        {
            response.setIsSuccess(false);
            response.setMessage(ex.getMessage());
        }

        return response;
    }

    public ServiceObjectResponse delete(int id)
    {
        ServiceObjectResponse response = new ServiceObjectResponse();

        try
        {
            boolean success = _bicycleRepository.delete(id);

            if(!success)
            {
                throw new Exception("Record not deleted (id: " + id + ").");
            }

            response.setIsSuccess(true);
            response.setMessage("No errors.");
        }
        catch (Exception ex)
        {
            response.setIsSuccess(false);
            response.setMessage(ex.getMessage());
        }

        return response;
    }
}
