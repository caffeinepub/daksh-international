import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Nat "mo:core/Nat";

actor {
  type Country = {
    #australia;
    #canada;
    #usa;
    #uk;
    #europe;
  };

  type Enquiry = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    country : Country;
    message : Text;
    timestamp : Time.Time;
  };

  module Enquiry {
    public func compareByTimestampDescending(a : Enquiry, b : Enquiry) : Order.Order {
      Int.compare(b.timestamp, a.timestamp);
    };
  };

  let enquiries = Map.empty<Nat, Enquiry>();
  var nextId = 0;

  public shared ({ caller }) func addEnquiry(
    name : Text,
    email : Text,
    phone : Text,
    country : Country,
    message : Text,
  ) : async () {
    if (Text.equal(name, "") or Text.equal(email, "") or Text.equal(phone, "")) {
      Runtime.trap("Name, email, and phone cannot be empty");
    };

    let enquiry : Enquiry = {
      id = nextId;
      name;
      email;
      phone;
      country;
      message;
      timestamp = Time.now();
    };

    enquiries.add(nextId, enquiry);
    nextId += 1;
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    let enquiryArray = enquiries.values().toArray();
    enquiryArray.sort(Enquiry.compareByTimestampDescending);
  };
};
