package entity;

public class TypeEntity {
    public int Id;
    public String Type;

    public TypeEntity() {
    }

    public TypeEntity(int id, String type) {
        Id = id;
        Type = type;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getType() {
        return Type;
    }

    public void setType(String type) {
        Type = type;
    }
}
