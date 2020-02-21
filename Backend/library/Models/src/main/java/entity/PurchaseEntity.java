package entity;

import enums.Payment;
import org.joda.time.DateTime;

public class PurchaseEntity {
    public int Id;
    public String CustomerUniqId;
    public int ItemId;
    public DateTime Date;
    public Payment PaymentMethod;

    public PurchaseEntity() {
    }

    public PurchaseEntity(int id, String customerUniqId, int itemId, DateTime date, Payment paymentMethod) {
        Id = id;
        CustomerUniqId = customerUniqId;
        ItemId = itemId;
        Date = date;
        PaymentMethod = paymentMethod;
    }
}
