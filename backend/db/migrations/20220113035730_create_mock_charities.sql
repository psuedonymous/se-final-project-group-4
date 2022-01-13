-- migrate:up
SELECT add_new_charity('Hope for Living', '123-22-122', 'hopeforliving@gmail.com', 'Cabatuan, Iloilo, Philippines',
' Hope for living is a charity for the poor and sick, helping them by giving livelihood, medicines, and education', 
'https://www.emilyprogram.com/wp-content/uploads/hope.png' );

SELECT add_new_charity('Kabubut-on', '122-452-590', ' kabubuton-ph@gmail.com', ' Iloilo, Philippines',
'Kabubut-on is a charity that accepts whatever donations from people and find means to deliver it to the struggling local folks of the province', 
'https://17nkc83tbxn1423r9b40udlw-wpengine.netdna-ssl.com/recognition-and-engagement-blog/wp-content/uploads/sites/2/2019/08/Giving-to-charity-at-work-2.png' );

SELECT add_new_charity('Share An Opportunity', '(034) 434 5313', 'share-opportunityg@gmail.com', 'Sta Barbara, Iloilo, Philippines',
'Share An Opportunity (SAO) Philippines has been serving the marginalized and most vulnerable children since 1996', 
'https://thumbs.dreamstime.com/z/opportunity-door-opened-bright-light-46291421.jpg' );

-- migrate:down
DELETE FROM charities where char_id=1 OR char_id=2 OR char_id=3;
