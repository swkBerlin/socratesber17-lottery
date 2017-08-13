# Lottery Drawing for #SoCraTesBER17

Mailaddresses are taken from the waitinglist in alphabetical order, duplicates removed, all lowercase.

The following shell command turns them into sha256sums (to protect privacy).

```
for i in $(cat mails.txt.csv); do echo -n socratesber2017_$i | sha256sum - >> applicants.txt ; done
```

The script `sample_from_mails.js` then samples 35 mail adresses from this list - the winners of the first lottery drawing.
