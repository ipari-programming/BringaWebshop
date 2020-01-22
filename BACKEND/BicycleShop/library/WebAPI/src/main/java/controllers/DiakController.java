package controllers;

import common.ServiceObjectResponse;
import entity.DiakEntity;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import request.RequestDiakByName;
import services.IDiakService;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

/*
swagger: http://localhost:8080/v2/api-docs?tags=diak
*/

@RestController
@Api(tags = {"diak"}, value = "DiakService")
public class DiakController
{
    @Autowired
    IDiakService _diakService;

    @ApiOperation(value = "all", nickname = "all")
    @GetMapping("/api/diak/all")
    @ResponseBody
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_CLIENT')")
    public List<DiakEntity> GetAll() throws Exception
    {
        ServiceObjectResponse<List<DiakEntity>> request = _diakService.getAll();

        if(!request.getIsSuccess())
        {
            throw new Exception(request.getMessage());
        }
        return request.getObject();
    }

    @ApiOperation(value = "getByName", nickname = "getByName")
    @PostMapping("/api/diak/byName")
    @ResponseBody
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_CLIENT')")
    public DiakEntity GetDiakByName(@RequestBody @Valid RequestDiakByName data) throws Exception
    {
        ServiceObjectResponse<DiakEntity> request = _diakService.getByName(data.Name);

        if(!request.getIsSuccess())
        {
            throw new Exception(request.getMessage());
        }
        return request.getObject();
    }

    @ApiOperation(value = "create", nickname = "create")
    @PostMapping("/api/diak")
    @ResponseBody
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_CLIENT')")
    public DiakEntity CreateDiak(@RequestBody DiakEntity diak) throws Exception
    {
        ServiceObjectResponse<DiakEntity> request = _diakService.create(diak);

        if(!request.getIsSuccess())
        {
            throw new Exception(request.getMessage());
        }
        return request.getObject();
    }

    @ApiOperation(value = "update", nickname = "update")
    @PutMapping("/api/diak")
    @ResponseBody
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_CLIENT')")
    public DiakEntity UpdateDiak(@RequestBody DiakEntity diak) throws Exception
    {
        ServiceObjectResponse<DiakEntity> request = _diakService.update(diak);

        if(!request.getIsSuccess())
        {
            throw new Exception(request.getMessage());
        }
        return request.getObject();
    }

    @ApiOperation(value = "delete", nickname = "delete")
    @DeleteMapping("/api/diak/{id}")
    @ResponseBody
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_CLIENT')")
    public boolean DeleteDiak(@PathVariable int id) throws Exception
    {
        ServiceObjectResponse request = _diakService.delete(id);

        if(!request.getIsSuccess())
        {
            throw new Exception(request.getMessage());
        }
        return request.getIsSuccess();
    }

    @ApiOperation(value = "getById", nickname = "getById")
    @GetMapping("/api/diak/{id}")
    @ResponseBody
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_CLIENT')")
    public DiakEntity GetDiakById(@PathVariable int id) throws Exception
    {
        ServiceObjectResponse<DiakEntity> request = _diakService.getById(id);

        if(!request.getIsSuccess())
        {
            throw new Exception(request.getMessage());
        }
        return request.getObject();
    }
}
