public with sharing class GenerateClaimId {
    
    @AuraEnabled (cacheable=true)
    public static String generateClaimString() {
        String claimId;
        Integer randomNumber1 = Integer.valueof((Math.random() * 100));
        Integer randomNumber2 = Integer.valueof((Math.random() * 100));
        
        claimId = 'Your Claim Id is: ' + 'CID' + randomNumber1 + randomNumber2;
        
        //return string
        return claimId;
    }

}