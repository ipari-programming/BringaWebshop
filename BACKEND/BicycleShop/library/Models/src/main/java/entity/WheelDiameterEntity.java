package entity;

public class WheelDiameterEntity {
    public int Id;
    public String Size;

    public WheelDiameterEntity() {
    }

    public WheelDiameterEntity(int id, String size) {
        Id = id;
        Size = size;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getSize() {
        return Size;
    }

    public void setSize(String size) {
        Size = size;
    }
}
