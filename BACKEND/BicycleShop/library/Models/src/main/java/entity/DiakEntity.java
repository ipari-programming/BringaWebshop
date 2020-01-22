package entity;

import io.swagger.annotations.ApiModel;

@ApiModel
public class DiakEntity
{
    public int Id;
    public String UniqID;
    public String Nev;
    public int Kreditek;

    public DiakEntity()
    {}

    public DiakEntity(int id, String uniqID, String nev, int kreditek)
    {
        Id = id;
        UniqID = uniqID;
        Nev = nev;
        Kreditek = kreditek;
    }
}
