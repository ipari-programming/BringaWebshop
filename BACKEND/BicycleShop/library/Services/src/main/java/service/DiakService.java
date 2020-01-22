package service;

import common.ServiceObjectResponse;
import entity.DiakEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.IDiakRepository;
import services.IDiakService;

import java.util.List;

@Service
public class DiakService implements IDiakService
{
    @Autowired
    IDiakRepository _diakRepository;

    public ServiceObjectResponse<List<DiakEntity>> getAll()
    {
        ServiceObjectResponse<List<DiakEntity>> response = new ServiceObjectResponse<>();

        try
        {
            List<DiakEntity> diakok = _diakRepository.getAll();

            response.setObject(diakok);
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

    public ServiceObjectResponse<DiakEntity> getByName(String name)
    {
        ServiceObjectResponse<DiakEntity> response = new ServiceObjectResponse<>();

        try
        {
            DiakEntity diak = _diakRepository.getByName(name);

            response.setObject(diak);
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

    public ServiceObjectResponse<DiakEntity> getById(int id)
    {
        ServiceObjectResponse<DiakEntity> response = new ServiceObjectResponse<>();

        try
        {
            DiakEntity diak = _diakRepository.getById(id);

            response.setObject(diak);
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

    public ServiceObjectResponse<DiakEntity> create(DiakEntity diak)
    {
        ServiceObjectResponse<DiakEntity> response = new ServiceObjectResponse<>();

        try
        {
            DiakEntity data = _diakRepository.create(diak);

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

    public ServiceObjectResponse<DiakEntity> update(DiakEntity diak)
    {
        ServiceObjectResponse<DiakEntity> response = new ServiceObjectResponse<>();

        try
        {
            DiakEntity data = _diakRepository.update(diak);

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
            boolean success = _diakRepository.delete(id);

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
