package repository;

import common.DBConnection;
import entity.DiakEntity;
import org.springframework.stereotype.Service;
import repositories.IDiakRepository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class DiakRepository implements IDiakRepository
{
    public List<DiakEntity> getAll() throws Exception
    {
        List<DiakEntity> diakok = new ArrayList<>();
        DiakEntity diak = null;

        Connection connection = DBConnection.getConnection();

        String SQL = "{ CALL DiakGetAll() }";
        CallableStatement stmt = connection.prepareCall(SQL);

        ResultSet resultSets = stmt.executeQuery();

        // Iterate through the data in the result set.
        while (resultSets.next())
        {
            diak = MapDiak(resultSets);
            diakok.add(diak);
        }

        return diakok;
    }

    public DiakEntity getByName(String name) throws Exception
    {
        DiakEntity diak = null;

        Connection connection = DBConnection.getConnection();

        String SQL = "{ CALL DiakFindByName(?) }";
        CallableStatement stmt = connection.prepareCall(SQL);
        stmt.setString("paramName", name);

        ResultSet resultSets = stmt.executeQuery();

        // Iterate through the data in the result set.
        while (resultSets.next())
        {
            diak = MapDiak(resultSets);
        }

        return  diak;
    }

    public DiakEntity create(DiakEntity diak) throws Exception
    {
        Connection connection = DBConnection.getConnection();

        String SQL = "{ CALL DiakCreate(?, ?, ?) }";

        CallableStatement  stmt = connection.prepareCall(SQL);
        stmt.setInt(1, diak.Id);
        stmt.setString(2, diak.Nev);
        stmt.setInt(3, diak.Kreditek);

        ResultSet resultSets  = stmt.executeQuery();
        if (resultSets.next())
        {
            diak.Id = resultSets.getInt(1);
        }


        return  diak;
    }

    public DiakEntity update(DiakEntity diak) throws Exception
    {
        Connection connection = DBConnection.getConnection();

        String SQL = "{ CALL DiakUpdate(?, ?, ?) }";
        CallableStatement stmt = connection.prepareCall(SQL);
        stmt.setInt("paramId", diak.Id);
        stmt.setString("paramName", diak.Nev);
        stmt.setInt("paramKreditek", diak.Kreditek);

        int affectedRows  = stmt.executeUpdate();

        //ellenorizzuk, hogy van e modositott record
        if (affectedRows == 0)
        {
            throw new SQLException("A rekord modositasa sikertelen volt.");
        }

        return  diak;
    }

    public boolean delete(int id) throws Exception
    {
        Connection connection = DBConnection.getConnection();

        String SQL = "{ CALL DiakDelete(?) }";
        CallableStatement stmt = connection.prepareCall(SQL);
        stmt.setInt("paramId", id);

        int affectedRows  = stmt.executeUpdate();

        return  affectedRows == 1 ? true : false;
    }

    public DiakEntity getById(int id) throws Exception
    {
        DiakEntity diak = null;

        Connection connection = DBConnection.getConnection();

        String SQL = "{ CALL DiakGetByID(?) }";
        CallableStatement stmt = connection.prepareCall(SQL);
        stmt.setInt("paramId", id);

        ResultSet resultSets = stmt.executeQuery();

        // Iterate through the data in the result set.
        while (resultSets.next())
        {
            diak = MapDiak(resultSets);
        }

        return  diak;
    }

    private DiakEntity MapDiak(ResultSet dataSet) throws SQLException
    {
        DiakEntity diak = new DiakEntity();
        diak.Id = Integer.parseInt(dataSet.getString("Id"));
        diak.UniqID = dataSet.getString("UniqID");
        diak.Nev = dataSet.getString("Nev");
        diak.Kreditek = Integer.parseInt(dataSet.getString("Kreditek"));

        return  diak;
    }
}
