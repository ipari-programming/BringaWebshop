package entity;

public class BicycleEntity {
    public int Id;
    public String Cikkszam;
    public int MarkaID;
    public int VazmeretID;
    public int FelniAtmeroID;
    public int ValtoTipus;
    public int TipusID;
    public int Ar;
    public String URL;

    public BicycleEntity() {
    }

    public BicycleEntity(int id, String cikkszam, int markaID, int vazmeretID, int felniAtmeroID, int valtoTipus, int tipusID, int ar, String URL) {
        Id = id;
        Cikkszam = cikkszam;
        MarkaID = markaID;
        VazmeretID = vazmeretID;
        FelniAtmeroID = felniAtmeroID;
        ValtoTipus = valtoTipus;
        TipusID = tipusID;
        Ar = ar;
        this.URL = URL;
    }
}
