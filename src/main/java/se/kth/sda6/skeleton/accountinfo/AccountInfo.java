package se.kth.sda6.skeleton.accountinfo;


import se.kth.sda6.skeleton.user.User;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name="account_information")
public class AccountInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "accountInformationId")
    private Long accountInformationId;

    @OneToOne
    @JoinColumn(name="userId")
    private User user;

    @NotEmpty(message = "Please provide a bank account details")
    @Column(name = "bankAccount_Number")
    private String bankAccountNumber;

    @NotEmpty(message = "Please provide a bank name details")
    @Column(name = "bank_Name")
    private String bankName;

    @NotEmpty(message = "Please provide a phone number details")
    @Column(name = "phone_Number")
    private String phoneNumber;

    @NotEmpty(message = "Please provide a I Ban number details")
    @Column(name = "iBan_Number")
    private String iBanNumber;


    public AccountInfo(){
    }

    public AccountInfo(String bankAccountNumber, User user, String bankName,
                       String phoneNumber, String iBanNumber) {
        this.bankAccountNumber = bankAccountNumber;
        this.user = user;
        this.bankName = bankName;
        this.phoneNumber = phoneNumber;
        this.iBanNumber = iBanNumber; }


    public String getBankAccountNumber() {
        return bankAccountNumber;
    }

    public void setBankAccountNumber(String bankAccountNumber) {
        this.bankAccountNumber = bankAccountNumber;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getiBanNumber() {
        return iBanNumber;
    }

    public void setiBanNumber(String iBanNumber) {
        this.iBanNumber = iBanNumber;
    }

}
