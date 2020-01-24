package controllers;


import common.ServiceObjectResponse;
import entity.ShifterEntity;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import services.IShifterService;

import java.util.List;

@RestController
@Api(tags = {"shifter"}, value = "ShifterService")
public class ShifterController {
    @Autowired
    IShifterService _shifterService;

    @ApiOperation(value = "all", nickname = "all")
    @GetMapping("/api/shifter/all")
    @ResponseBody
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_CLIENT')")
    public List<ShifterEntity> GetAll() throws Exception
    {
        ServiceObjectResponse<List<ShifterEntity>> request = _shifterService.getAll();

        if(!request.getIsSuccess())
        {
            throw new Exception(request.getMessage());
        }
        return request.getObject();
    }

    @ApiOperation(value = "getById", nickname = "getById")
    @GetMapping("/api/shifter/{id}")
    @ResponseBody
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_CLIENT')")
    public ShifterEntity GetShifterById(@PathVariable int id) throws Exception
    {
        ServiceObjectResponse<ShifterEntity> request = _shifterService.getById(id);

        if(!request.getIsSuccess())
        {
            throw new Exception(request.getMessage());
        }
        return request.getObject();
    }

}
