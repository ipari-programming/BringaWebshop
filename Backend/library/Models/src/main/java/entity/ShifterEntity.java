package entity;

public class ShifterEntity {
    public int Id;
    public String Shifter;

    public ShifterEntity() {
    }

    public ShifterEntity(int id, String shifter) {
        Id = id;
        Shifter = shifter;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getShifter() {
        return Shifter;
    }

    public void setShifter(String shifter) {
        Shifter = shifter;
    }
}
