package repositories;

import entity.DiakEntity;

import java.util.List;

public interface IDiakRepository
{
    List<DiakEntity> getAll() throws Exception;
    DiakEntity getByName(String name) throws Exception;
    DiakEntity create(DiakEntity diak) throws Exception;
    DiakEntity update(DiakEntity diak) throws Exception;
    boolean delete(int id) throws Exception;
    DiakEntity getById(int id) throws Exception;
}
