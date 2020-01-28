package entity;

public class SizeEntity {
    public int Id;
    public String Size;

    public SizeEntity() {
    }

    public SizeEntity(int id, String size) {
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
