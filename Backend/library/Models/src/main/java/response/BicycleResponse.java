package response;

import entity.BicycleEntity;

public class BicycleResponse extends BicycleEntity{
    public String Marka;
    public String Vazmeret;
    public String FelniAtmero;
    public String Valto;
    public String Tipus;



    public BicycleResponse() {
    }

    public BicycleResponse(String cikkszam, int markaID, int vazmeretID, int felniAtmeroID, int valtoTipus, int tipusID, int ar, String URL) {
        Cikkszam = cikkszam;
        MarkaID = markaID;
        VazmeretID = vazmeretID;
        FelniAtmeroID = felniAtmeroID;
        ValtoTipus = valtoTipus;
        TipusID = tipusID;
        Ar = ar;
        this.URL = URL;
    }

    public BicycleResponse(int id, String cikkszam, int markaID, int vazmeretID, int felniAtmeroID, int valtoTipus, int tipusID, int ar, String URL, String marka, String vazmeret, String felniAtmero, String valto, String tipus) {
        super(id, cikkszam, markaID, vazmeretID, felniAtmeroID, valtoTipus, tipusID, ar, URL);
        Marka = marka;
        Vazmeret = vazmeret;
        FelniAtmero = felniAtmero;
        Valto = valto;
        Tipus = tipus;
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
        URL=bicycleEntity.URL;

    }
}
