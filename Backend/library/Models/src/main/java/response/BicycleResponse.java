package response;

import entity.BicycleEntity;

public class BicycleResponse {
    public String Cikkszam;
    public int MarkaID;
    public int VazmeretID;
    public int FelniAtmeroID;
    public int ValtoTipus;
    public int TipusID;
    public int Ar;

    public BicycleResponse() {
    }

    public BicycleResponse(String cikkszam, int markaID, int vazmeretID, int felniAtmeroID, int valtoTipus, int tipusID, int ar) {
        Cikkszam = cikkszam;
        MarkaID = markaID;
        VazmeretID = vazmeretID;
        FelniAtmeroID = felniAtmeroID;
        ValtoTipus = valtoTipus;
        TipusID = tipusID;
        Ar = ar;
    }

    public BicycleResponse(BicycleEntity bicycleEntity)
    {
        if (bicycleEntity==null)
        {
            return;
        }
        Cikkszam=bicycleEntity.Cikkszam;
        MarkaID=bicycleEntity.MarkaID;
        VazmeretID=bicycleEntity.VazmeretID;
        FelniAtmeroID=bicycleEntity.FelniAtmeroID;
        ValtoTipus=bicycleEntity.ValtoTipus;
        TipusID=bicycleEntity.TipusID;
        Ar=bicycleEntity.Ar;

    }
}
