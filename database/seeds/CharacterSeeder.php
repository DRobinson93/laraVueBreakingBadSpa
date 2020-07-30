<?php

use App\Character;
use GuzzleHttp\Client;
use Illuminate\Database\Seeder;

class CharacterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $client = new Client();
        $stateQuery = $client->get('https://www.breakingbadapi.com/api/characters');
        $chars = $stateQuery->getBody();
        $chars = json_decode($chars, true);
        foreach ($chars as $c) {
            $charData = ['id' => $c['char_id']];
            //todo make occupation model and appearance and insert that data
            //todo handle better_call_saul_appearance from result set
            foreach(['name', 'img', 'status', 'nickname', 'portrayed', 'category'] as $index){
                $charData[$index] = $c[$index];
            }
            Character::create($charData);
        }
    }
}
