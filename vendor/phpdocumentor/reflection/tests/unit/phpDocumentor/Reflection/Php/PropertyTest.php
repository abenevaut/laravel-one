<?php

declare(strict_types=1);

/**
 * This file is part of phpDocumentor.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @link http://phpdoc.org
 */

namespace phpDocumentor\Reflection\Php;

use phpDocumentor\Reflection\DocBlock;
use phpDocumentor\Reflection\Fqsen;
use phpDocumentor\Reflection\Location;
use phpDocumentor\Reflection\Metadata\MetaDataContainer as MetaDataContainerInterface;
use phpDocumentor\Reflection\Types\Integer;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\UsesClass;

/**
 * Tests the functionality for the Property class.
 *
 * @property Property $fixture
 */
#[CoversClass(Property::class)]
#[UsesClass('\phpDocumentor\Reflection\Php\Visibility')]
#[UsesClass('\phpDocumentor\Reflection\Types\Integer')]
final class PropertyTest extends TestCase
{
    use MetadataContainerTestHelper;

    private Fqsen $fqsen;

    private Visibility $visibility;

    private DocBlock $docBlock;

    protected function setUp(): void
    {
        $this->fqsen = new Fqsen('\My\Class::$property');
        $this->visibility = new Visibility('private');
        $this->docBlock = new DocBlock('');
        $this->fixture = new Property($this->fqsen);
    }

    private function getFixture(): MetaDataContainerInterface
    {
        return $this->fixture;
    }

    public function testGetFqsenAndGetName(): void
    {
        $property = new Property($this->fqsen);

        $this->assertSame($this->fqsen, $property->getFqsen());
        $this->assertEquals($this->fqsen->getName(), $property->getName());
    }

    public function testGettingWhetherPropertyIsStatic(): void
    {
        $property = new Property($this->fqsen, $this->visibility, $this->docBlock, null, false);
        $this->assertFalse($property->isStatic());

        $property = new Property($this->fqsen, $this->visibility, $this->docBlock, null, true);
        $this->assertTrue($property->isStatic());
    }

    public function testGettingWhetherPropertyIsReadOnly(): void
    {
        $property = new Property($this->fqsen, $this->visibility, $this->docBlock, null);
        $this->assertFalse($property->isReadOnly());

        $property = new Property(
            $this->fqsen,
            $this->visibility,
            $this->docBlock,
            null,
            true,
            null,
            null,
            null,
            true,
        );

        $this->assertTrue($property->isReadOnly());
    }

    public function testGettingVisibility(): void
    {
        $property = new Property($this->fqsen, $this->visibility, $this->docBlock, null, true);

        $this->assertSame($this->visibility, $property->getVisibility());
    }

    public function testSetAndGetTypes(): void
    {
        $property = new Property($this->fqsen, $this->visibility, $this->docBlock, null, true);
        $this->assertEquals([], $property->getTypes());

        $property->addType('a');
        $this->assertEquals(['a'], $property->getTypes());
    }

    public function testGetDefault(): void
    {
        $property = new Property($this->fqsen, $this->visibility, $this->docBlock, null, false);
        $this->assertNull($property->getDefault());

        $property = new Property($this->fqsen, $this->visibility, $this->docBlock, 'a', true);
        $this->assertEquals('a', $property->getDefault());
    }

    public function testGetDocBlock(): void
    {
        $property = new Property($this->fqsen, $this->visibility, $this->docBlock, null, false);
        $this->assertSame($this->docBlock, $property->getDocBlock());
    }

    public function testLineAndColumnNumberIsReturnedWhenALocationIsProvided(): void
    {
        $fixture = new Property($this->fqsen, null, null, null, false, new Location(100, 20), new Location(101, 20));
        $this->assertLineAndColumnNumberIsReturnedWhenALocationIsProvided($fixture);
    }

    public function testGetType(): void
    {
        $type = new Integer();
        $fixture = new Property(
            $this->fqsen,
            null,
            null,
            null,
            false,
            null,
            null,
            $type,
        );

        $this->assertSame($type, $fixture->getType());

        $fixture = new Property($this->fqsen);
        $this->assertNull($fixture->getType());
    }
}
